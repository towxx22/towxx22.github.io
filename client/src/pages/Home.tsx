import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { ChevronRight, Send } from "lucide-react";

export default function Home() {
  const products = [
    {
      id: "kingmod-ios",
      name: "KingMod",
      platform: "iOS",
      logo: "/logos/king_ios.jpg",
      features: "스킨핵 • 에임봇 • 유도탄 • ESP",
      advantage: "현존 iOS 노탈옥 중 최강. 모든 기능 완비, 낮은 정지률",
      price: "5,000원 / 1일",
    },
    {
      id: "vnhax",
      name: "VNHax",
      platform: "iOS",
      logo: "/logos/vnhax.jpg",
      features: "스킨핵 • 에임봇 • 유도탄 • ESP",
      advantage: "부드러운 UI, 낮은 정지률",
      price: "5,000원 / 1일",
    },
    {
      id: "kingmod-android",
      name: "KingMod",
      platform: "Android",
      logo: "/logos/king_안드.jpg",
      features: "스킨핵 • 유도탄 • ESP",
      advantage: "논루팅 중 최고의 성능",
      price: "5,000원 / 1일",
    },
    {
      id: "zolo",
      name: "Zolo",
      platform: "Android",
      logo: "/logos/zolo.jpg",
      features: "에임봇 • ESP",
      advantage: "부드러운 화면, 부드러운 에임봇",
      price: "5,000원 / 1일",
    },
    {
      id: "obsidian",
      name: "Obsidian",
      platform: "Android",
      logo: "/logos/Obsidian.jpg",
      features: "에임봇 • ESP • 고정기능",
      advantage: "부드러운 화면, 부드러운 에임봇",
      price: "5,000원 / 1일",
    },
    {
      id: "kc-v1",
      name: "KC V1",
      platform: "Android (Root)",
      logo: "/logos/KC.jpg",
      features: "에임봇 • ESP",
      advantage: "모든 기능, 정지률 10% 미만, 녹화방지",
      price: "6,000원 / 1일",
    },
    {
      id: "kc-v2",
      name: "KC V2",
      platform: "Android (Root)",
      logo: "/logos/KC.jpg",
      features: "에임봇 • 유도탄 • ESP",
      advantage: "모든 기능, 정지률 10% 미만, 녹화방지",
      price: "8,000원 / 1일",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold glow-cyan">2X</div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="text-sm hover:text-primary transition">
              제품
            </a>
            <a href="#pricing" className="text-sm hover:text-primary transition">
              추천
            </a>
            <a href="#contact" className="text-sm hover:text-primary transition">
              문의
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 glow-cyan">
            2X Store
          </h1>
        </div>
      </section>

      {/* Notice Link Section - 맨 위 */}
      <section className="py-8 bg-gradient-to-b from-background to-background/95">
        <div className="container max-w-2xl">
          <Link href="/notice">
            <a>
              <Card className="border-glow-cyan bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md p-6 md:p-8 border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 cursor-pointer group hover:shadow-2xl hover:shadow-primary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">⚠️</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-primary group-hover:glow-cyan transition-all duration-300">
                        구매 전 확인 필수
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        클릭하여 필수 사항 확인
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 hidden md:block">
                    <div className="text-2xl text-primary/50 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">→</div>
                  </div>
                </div>
              </Card>
            </a>
          </Link>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-background/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`}>
                <Card className="border-glow-cyan hover-lift bg-card/40 backdrop-blur-md overflow-hidden cursor-pointer group border border-border/30 h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center rounded-2xl">
                      <img
                        src={product.logo}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold glow-cyan">{product.name}</h3>
                        <span className="text-xs font-mono bg-accent/20 text-accent px-2 py-1 rounded-full border border-accent/30 whitespace-nowrap">
                          {product.platform}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium tracking-wide">
                        {product.features}
                      </p>
                      <div className="bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-lg p-4 flex-grow">
                        <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">✨ 장점</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          {product.advantage}
                        </p>
                      </div>
                      <div className="flex items-center justify-end pt-3 border-t border-border/20">
                        <a
                          href="https://t.me/xxh4ck"
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button className="glass-btn px-4 py-2 rounded text-xs font-bold flex items-center gap-1">
                            구매
                            <ChevronRight className="h-3 w-3" />
                          </button>
                        </a>
                      </div>
                    </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">
              추천 핵
            </h2>
            <p className="text-lg text-muted-foreground">
              최고의 성능과 안정성을 고려한 추천
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* iOS Recommendations */}
            <Card className="border-glow-cyan bg-card/40 backdrop-blur-md p-8 border border-border/30">
              <h3 className="text-2xl font-bold mb-6 glow-magenta">iOS 추천</h3>
              <div className="space-y-4">
                <Link href="/product/kingmod-ios">
                  <div className="block pb-4 border-b border-border/20 hover:opacity-80 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">1위</div>
                      <div>
                        <p className="font-bold text-lg glow-cyan">KingMod</p>
                        <p className="text-sm text-muted-foreground">
                          현존 최강의 iOS 모드
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/product/vnhax">
                  <div className="block hover:opacity-80 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">2위</div>
                      <div>
                        <p className="font-bold text-lg glow-cyan">VNHax</p>
                        <p className="text-sm text-muted-foreground">
                          부드러운 경험
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Card>

            {/* Android Recommendations */}
            <Card className="border-glow-cyan bg-card/40 backdrop-blur-md p-8 border border-border/30">
              <h3 className="text-2xl font-bold mb-6 glow-magenta">
                Android 추천
              </h3>
              <div className="space-y-4">
                <Link href="/product/kc-v1">
                  <div className="block pb-4 border-b border-border/20 hover:opacity-80 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">1위</div>
                      <div>
                        <p className="font-bold text-lg glow-cyan">KC (V1, V2)</p>
                        <p className="text-sm text-muted-foreground">
                          루팅 기기 최강
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/product/kingmod-android">
                  <div className="block pb-4 border-b border-border/20 hover:opacity-80 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">2위</div>
                      <div>
                        <p className="font-bold text-lg glow-cyan">KingMod</p>
                        <p className="text-sm text-muted-foreground">
                          논루팅 최고
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href="/product/obsidian">
                  <div className="block hover:opacity-80 transition cursor-pointer">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl font-bold text-primary">3위</div>
                      <div>
                        <p className="font-bold text-lg glow-cyan">Obsidian</p>
                        <p className="text-sm text-muted-foreground">
                          프리미엄 에임
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background/50">
        <div className="container max-w-2xl">
          <Card className="border-glow-cyan bg-card/40 backdrop-blur-md p-12 text-center border border-border/30">
            <h2 className="text-3xl font-bold mb-4 glow-magenta">
              더 많은 정보가 필요하신가요?
            </h2>
            <p className="text-muted-foreground mb-8">
              텔레그램으로 직접 문의하시면 자세한 정보를 제공해드립니다.
            </p>
            <a
              href="https://t.me/xxh4ck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="glass-btn px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2">
                텔레그램으로 문의하기
                <Send className="h-4 w-4" />
              </button>
            </a>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/20 py-8 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© 2026 2X. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
