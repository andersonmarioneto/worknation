import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSummary() {
    return (
        <section className="py-20 bg-muted/30 dark:bg-muted/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                            Sobre a Worknation
                        </h2>
                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Somos uma empresa de tecnologia dedicada a transformar a maneira como as empresas operam e crescem.
                            </p>
                            <p>
                                Com uma equipe apaixonada por inovação, entregamos soluções que não apenas resolvem problemas, mas criam novas oportunidades. Nossa missão é ser o parceiro tecnológico estratégico que seu negócio precisa para escalar.
                            </p>
                        </div>
                        <Button asChild variant="default" className="mt-4">
                            <Link href="/sobre" className="gap-2">
                                Conheça nossa história <ArrowRight className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-dashed border-border flex items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/10 transition-colors" />
                            <span className="text-muted-foreground font-medium z-10">Imagem Institucional / Equipe</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
