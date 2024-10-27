"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { XAxis, CartesianGrid, Bar, BarChart, ResponsiveContainer } from "recharts";

export default function ChartOverView() {
    const chartData = [
        { month: "Janeiro", desktop: 186, mobile: 80 },
        { month: "Fevereiro", desktop: 305, mobile: 200 },
        { month: "Março", desktop: 237, mobile: 120 },
        { month: "Abril", desktop: 73, mobile: 190 },
        { month: "Maio", desktop: 209, mobile: 130 },
        { month: "Junho", desktop: 214, mobile: 140 },
    ];

    const [isMounted, setIsMounted] = useState(false);

    // Garante que o componente renderize apenas no cliente
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null; // Evita renderização durante o SSR

    return (
        <Card className="w-full md:w-1/2 md:max-w-[600px]">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Overview vendas
                    </CardTitle>
                    <DollarSign className="ml-auto w-4 h-4" />
                </div>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} width={500} height={300} className="max-w-full">
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <Bar dataKey="desktop" fill="#2563eb" radius={4} />
                        <Bar dataKey="mobile" fill="#60a5fa" radius={4} />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
