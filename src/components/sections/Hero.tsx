import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden bg-background">
            {/* Background Decorator (Abstract) */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />

            <div className="container mx-auto px-6 text-center">
                <div className="mx-auto max-w-3xl space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                        Conectando soluções e <span className="text-primary">pessoas reais</span>
                    </h1>

                    <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
                        Transformamos desafios complexos em produtos digitais inovadores.
                        A parceira estratégica para o crescimento do seu negócio.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="text-base font-semibold px-8 h-12">
                            <Link href="/servicos">
                                Nossos Serviços
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="text-base font-semibold px-8 h-12">
                            <Link href="/contato">
                                Fale Conosco
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
