import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken'
import { User } from "@prisma/client";

interface AuthRequest {
    email: string, 
    password: string
}

class AuthUserService{
    async execute({ email, password } :AuthRequest){
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        await this.validUserToAuth(user, password);

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '5d',
            }
        )

       return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }

    private async validUserToAuth(user: User, password: string) {
        if (!user) {
            throw new Error('User or password invalid');
        }

        const isPasswordMatch = await compare(password, user.password);

        if (!isPasswordMatch) {
            throw new Error('User or password invalid');
        }
    }
}

export { AuthUserService };
