import Link from "next/link"
import { Code2, Smartphone, BarChart3, Cloud } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
    {
        icon: Code2,
        title: "Desenvolvimento Web",
        description: "Sites e aplicações web de alta performance, otimizados para SEO e conversão."
    },
    {
        icon: Smartphone,
        title: "Mobile Apps",
        description: "Aplicativos intuitivos para iOS e Android que conectam sua marca ao público."
    },
    {
        icon: BarChart3,
        title: "Consultoria Digital",
        description: "Estratégias de digitalização e automação para otimizar seus processos."
    },
    {
        icon: Cloud,
        title: "Soluções em Nuvem",
        description: "Infraestrutura escalável e segura para sustentar o crescimento do seu negócio."
    }
]

export function Services() {
    return (
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                        Nossos Serviços
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Soluções completas para transformar sua presença digital.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <Card key={index} className="border-border/50 bg-card/50 hover:bg-card transition-colors hover:border-primary/50">
                            <CardHeader>
                                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                    <service.icon className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground text-sm">
                                    {service.description}
                                </p>
                                <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary">
                                    <Link href="/servicos">Saiba mais &rarr;</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
