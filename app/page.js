import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card";
import {DollarSign, Users, Percent, BadgeDollarSign} from "lucide-react";
import ChartOverView from "@/components/chart";
import {Sales} from "@/components/sales"

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
          Total vendas

          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4"/>
        </div>
        <CardDescription>Total vendas em 90 dias</CardDescription>
      </CardHeader>
      <CardContent className="text-base sm:text-lg font-bold">R$ 40.000</CardContent>
    </Card>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
          Novos clientes
          </CardTitle>
          <Users className="ml-auto w-4 h-4"/>
        </div>
        <CardDescription>Novos clientes em 30 dias</CardDescription>
      </CardHeader>
      <CardContent className="text-base sm:text-lg font-bold">251</CardContent>
    </Card>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
          Pedidos hoje
          </CardTitle>
          <Percent className="ml-auto w-4 h-4"/>
        </div>
        <CardDescription>Total pedidos hoje</CardDescription>
      </CardHeader>
      <CardContent className="text-base sm:text-lg font-bold">41</CardContent>
    </Card>
    <Card>
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
          Total pedidos em 30 dias
          </CardTitle>
          <BadgeDollarSign className="ml-auto w-4 h-4"/>
        </div>
        <CardDescription>Total pedidos em 30 dias</CardDescription>
      </CardHeader>
      <CardContent className="text-base sm:text-lg font-bold">875</CardContent>
    </Card>
    </section>
    <section className="mt-4 flex flex-col md:flex-row gap-4">
    <ChartOverView/>
    <Sales/>
    </section>
    </main>  
  );
}
