import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CtaSection() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto">
                    Pronto para inovar?
                </h2>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                    Vamos transformar suas ideias em realidade. Agende uma conversa gratuita com nossos especialistas hoje mesmo.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                    <Button asChild size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                        <Link href="/contato">
                            Solicite uma Reunião
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
