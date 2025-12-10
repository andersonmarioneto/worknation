import Image from "next/image"
import { Rocket, Eye, ShieldCheck } from "lucide-react"

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-background pb-20">
            {/* Hero Section */}
            <section className="py-20 md:py-32 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background opacity-50 pointer-events-none" />
                {/* Abstract shapes */}
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                        Sobre a Worknation: <br className="hidden md:block" />
                        Construindo o Futuro da Tecnologia
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">
                        A nossa paixão por UI/UX, desenvolvimento e formação profissional para impulsionar o seu sucesso.
                    </p>
                </div>
            </section>

            {/* DNA Section */}
            <section className="py-20" id="dna">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                        O Nosso ADN
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        {/* Missão */}
                        <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                                <Rocket className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
                            <p className="text-muted-foreground">
                                Capacitar pessoas e empresas com soluções de ponta, construindo pontes para um futuro tecnológico mais acessível.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                                <Eye className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
                            <p className="text-muted-foreground">
                                Sermos a referência em Portugal na formação e desenvolvimento, reconhecidos pela inovação e pelo impacto positivo que geramos.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-center mb-6 w-16 h-16 mx-auto bg-primary/10 rounded-full">
                                <ShieldCheck className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">Valores</h3>
                            <p className="text-muted-foreground">
                                Compromisso com a qualidade, paixão pelo cliente e transparência são os pilares que nos guiam.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 bg-muted/20" id="history">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
                        A Nossa História
                    </h2>
                    <div className="relative max-w-2xl mx-auto">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 -ml-px w-0.5 h-full bg-border" />

                        {/* 2020 */}
                        <div className="relative mb-16">
                            <div className="flex items-center justify-start">
                                <div className="w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-foreground">2020 - A Fundação</h3>
                                    <p className="mt-2 text-muted-foreground text-sm">
                                        Nascemos da visão de dois empreendedores com o objetivo de inovar o mercado de TI em Portugal.
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 border-4 border-background font-bold text-xs shadow-md">
                                    1
                                </div>
                            </div>
                        </div>

                        {/* 2021 */}
                        <div className="relative mb-16">
                            <div className="flex items-center justify-end">
                                <div className="w-1/2 pl-8 text-left">
                                    <h3 className="text-xl font-semibold text-foreground">2021 - Primeiros Projetos</h3>
                                    <p className="mt-2 text-muted-foreground text-sm">
                                        Execução dos primeiros projetos de desenvolvimento web e mobile, conquistando a confiança do mercado.
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 border-4 border-background font-bold text-xs shadow-md">
                                    2
                                </div>
                            </div>
                        </div>

                        {/* 2022 */}
                        <div className="relative mb-16">
                            <div className="flex items-center justify-start">
                                <div className="w-1/2 pr-8 text-right">
                                    <h3 className="text-xl font-semibold text-foreground">2022 - Expansão da Formação</h3>
                                    <p className="mt-2 text-muted-foreground text-sm">
                                        Inauguração da nossa academia de formação profissional, com foco nas novas tecnologias e tendências.
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 border-4 border-background font-bold text-xs shadow-md">
                                    3
                                </div>
                            </div>
                        </div>

                        {/* Hoje */}
                        <div className="relative">
                            <div className="flex items-center justify-end">
                                <div className="w-1/2 pl-8 text-left">
                                    <h3 className="text-xl font-semibold text-foreground">Hoje - Rumo ao Futuro</h3>
                                    <p className="mt-2 text-muted-foreground text-sm">
                                        Com mais de 30 talentos, uma equipa coesa e multidisciplinar que se posiciona como líder em inovação digital.
                                    </p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center absolute left-1/2 -translate-x-1/2 z-10 border-4 border-background font-bold text-xs shadow-md">
                                    4
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators Section */}
            <section className="py-20" id="differentiators">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                        O Que Nos Diferencia
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="text-xl font-semibold text-foreground mb-3">Abordagem Inovadora</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Integramos as últimas tendências de design e desenvolvimento para criar soluções de vanguarda.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="text-xl font-semibold text-foreground mb-3">Base Sólida</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                A nossa experiência combina serviços práticos com formação, criando um ciclo de melhoria contínua.
                            </p>
                        </div>
                        <div className="text-center p-6 rounded-lg hover:bg-muted/50 transition-colors">
                            <h3 className="text-xl font-semibold text-foreground mb-3">Foco no Cliente</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Trabalhamos em estreita colaboração com cada cliente para garantir um resultado final que supera as expectativas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 bg-muted/20" id="team">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16">
                        Conheça a Equipa Fundadora
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24">
                        {/* André Silva */}
                        <div className="flex flex-col items-center group">
                            <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                                <Image
                                    src="/images/quadrada.jpg"
                                    alt="Retrato de André Silva"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">André Silva</h3>
                            <p className="text-primary font-medium">Co-Fundador & CEO</p>
                        </div>

                        {/* Inês Pereira */}
                        <div className="flex flex-col items-center group">
                            <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors">
                                <Image
                                    src="/images/quadrada.jpg"
                                    alt="Retrato de Inês Pereira"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Inês Pereira</h3>
                            <p className="text-primary font-medium">Co-Fundadora & CTO</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
