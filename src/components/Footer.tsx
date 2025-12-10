import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight text-foreground">Worknation Angola</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                            Transformando ideias em soluções digitais de alto impacto.
                            Inovação, tecnologia e excelência para o seu negócio.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-primary transition-colors">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Social</h4>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-xs text-muted-foreground pt-2">
                            Luanda, Angola
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Worknation. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
