import {CircleDollarSign} from "lucide-react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
export function Sales() {
    return(
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos clientes
                    </CardTitle>
                    <CircleDollarSign className="ml-auto w-4 h-4" />
                </div>
            <CardDescription>
                Novos clientes nas últimas 24 horas
            </CardDescription>
            </CardHeader>
            <CardContent>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/iigorvidall.png"/>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-bae font-semibold">Cliente 1</p>
                        <div className="text-sm md:text-base font-semibold"></div>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/iigorvidall.png"/>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-bae font-semibold">Cliente 2</p>
                        <div className="text-sm md:text-base font-semibold"></div>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
                <article className="flex items-center gap-2 border-b py-2">
                    <Avatar className="w-8 h-8">
                        <AvatarImage src="https://github.com/iigorvidall.png"/>
                    </Avatar>
                    <div>
                        <p className="text-sm sm:text-bae font-semibold">Cliente 3</p>
                        <div className="text-sm md:text-base font-semibold"></div>
                        <span className="text-[12px] sm:text-sm text-gray-400">teste@teste.com</span>
                    </div>
                </article>
            </CardContent>
        </Card>
    )
    
}