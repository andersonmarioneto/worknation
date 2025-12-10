import Link from "next/link"
import Image from "next/image"
import {
    Palette,
    Code2,
    Smartphone,
    GraduationCap,
    Cloud,
    Headphones,
    ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Service Data
const services = [
    {
        icon: Palette,
        title: "UI/UX Design",
        description: "Criamos interfaces intuitivas e experiências de usuário memoráveis que encantam e convertem. Focamos em design centrado no usuário para garantir que seu produto não seja apenas bonito, mas funcional e acessível.",
    },
    {
        icon: Code2,
        title: "Desenvolvimento Web",
        description: "Construímos aplicações web robustas, escaláveis e de alta performance. Da concepção à implementação, utilizamos as mais recentes tecnologias para entregar soluções web que impulsionam o seu negócio.",
    },
    {
        icon: Smartphone,
        title: "Desenvolvimento Mobile",
        description: "Desenvolvemos aplicativos móveis nativos e híbridos para iOS e Android. Transformamos suas ideias em aplicativos inovadores, focados em performance, segurança e uma excelente experiência do usuário.",
    },
    {
        icon: GraduationCap,
        title: "Formação e Workshops",
        description: "Capacitamos equipes com formação e workshops práticos nas áreas de design, desenvolvimento e gestão de projetos. Nossos programas são desenhados para acelerar o crescimento profissional e a inovação.",
    },
    {
        icon: Cloud,
        title: "Soluções Cloud",
        description: "Oferecemos consultoria e implementação de soluções em nuvem, otimizando infraestrutura para escalabilidade, segurança e eficiência de custos. Apoiamos a sua jornada de transformação digital para a cloud.",
    },
    {
        icon: Headphones,
        title: "Consultoria de TI",
        description: "A nossa consultoria estratégica ajuda a alinhar a tecnologia com os seus objetivos de negócio. Fornecemos insights e roadmaps para otimizar processos, reduzir riscos e impulsionar a inovação.",
    },
]

// Project Data
const projects = [
    {
        category: "Desenvolvimento Web",
        title: "Plataforma E-commerce Avançada",
        description: "Solução completa de e-commerce com foco em experiência do usuário e otimização de conversão.",
        image: "/images/retangular.jpg"
    },
    {
        category: "Aplicativos Mobile",
        title: "App de Bem-Estar e Saúde",
        description: "Aplicativo móvel intuitivo para acompanhamento de hábitos saudáveis, meditação e exercícios.",
        image: "/images/retangular.jpg"
    },
    {
        category: "Branding & UI/UX Design",
        title: "Rebranding para Fintech Inovadora",
        description: "Criação de uma nova identidade visual e interface de usuário para uma startup financeira em ascensão.",
        image: "/images/retangular.jpg"
    },
    {
        category: "Desenvolvimento Web",
        title: "Sistema de Gestão SaaS",
        description: "Desenvolvimento de uma plataforma SaaS complexa para gerenciamento de projetos e equipes.",
        image: "/images/retangular.jpg"
    },
    {
        category: "UI/UX Design",
        title: "Portal de Notícias Tech",
        description: "Redesenho da interface e experiência de usuário para um grande portal de notícias de tecnologia.",
        image: "/images/retangular.jpg"
    },
    {
        category: "Aplicativos Mobile",
        title: "App Social Commerce",
        description: "Plataforma mobile que integra redes sociais com funcionalidades de compra e venda de produtos.",
        image: "/images/retangular.jpg"
    }
]

const categories = ["Todos", "UI/UX Design", "Desenvolvimento Web", "Aplicativos Mobile", "Branding"]

export default function ServicosPage() {
    return (
        <main className="min-h-screen bg-background pb-20 animate-fade-in-up">
            {/* Header Section */}
            <section className="py-20 text-center bg-muted/20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Nossos Serviços
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Potencializamos seu negócio com soluções tecnológicas de ponta. Descubra como nossos serviços de design,
                        desenvolvimento e formação podem levar sua empresa ao próximo nível.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-primary/10 text-primary">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                                <p className="text-muted-foreground mb-6 line-clamp-4">{service.description}</p>
                                <Link
                                    href="/contato"
                                    className="font-medium text-primary hover:underline flex items-center group-hover:text-primary/80 transition-colors"
                                >
                                    Saber Mais
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div
                        className="bg-secondary/90 dark:bg-secondary rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden"
                    >
                        {/* Abstract Background Decorator */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(3,171,238,0.1),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(3,171,238,0.1),transparent_40%)] pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-white mb-4">Vamos construir o futuro juntos?</h2>
                            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
                                Descubra como os nossos serviços de design, desenvolvimento e formação podem ajudar a sua empresa a atingir
                                novos patamares de excelência.
                            </p>
                            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-bold px-8 h-12 text-base">
                                <Link href="/contato">
                                    Fale Conosco
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-16 bg-muted/10">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Nossos Projetos
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground">
                            Explore os cases de sucesso que demonstram nossa expertise em transformar ideias em realidade digital,
                            impulsionando o crescimento de nossos clientes.
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`font-medium py-2 px-5 rounded-full text-sm transition-colors ${index === 0
                                    ? "bg-primary text-white"
                                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-border"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                                </div>

                                <div className="p-6">
                                    <Badge variant="secondary" className="mb-3 hover:bg-secondary/80">
                                        {project.category}
                                    </Badge>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <Link
                                        href="#"
                                        className="font-semibold text-primary inline-flex items-center hover:underline"
                                    >
                                        Ver Detalhes
                                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Button variant="outline" size="lg" className="px-8 font-semibold">
                            Carregar Mais
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}
