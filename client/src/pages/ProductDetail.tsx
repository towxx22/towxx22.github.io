import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useParams, Link } from "wouter";
import { ArrowLeft, Send } from "lucide-react";

const productData: Record<
  string,
  {
    name: string;
    platform: string;
    logo: string;
    description: string;
    features: string[];
    advantage: string;
    pricing: Array<{ period: string; price: string }>;
    compatibility: string;
    notes: string;
  }
> = {
  "kingmod-ios": {
    name: "KingMod",
    platform: "iOS",
    logo: "/logos/king_ios.jpg",
    description: "iOS 플랫폼의 최강 게임 모드",
    features: [
      "스킨핵 (자동차, 총, 옷)",
      "에임봇",
      "유도탄",
      "ESP",
    ],
    advantage: "현존 iOS 노탈옥 중 최강. 모든 기능 완비, 낮은 정지률",
    pricing: [
      { period: "1일", price: "5,000원" },
      { period: "7일", price: "20,000원" },
      { period: "30일", price: "40,000원" },
    ],
    compatibility: "iOS 12.0 이상",
    notes: "현재 가장 강력한 iOS 선택입니다.",
  },
  vnhax: {
    name: "VNHax",
    platform: "iOS",
    logo: "/logos/vnhax.jpg",
    description: "부드러운 UI의 iOS 게임 모드",
    features: [
      "스킨핵 (자동차, 총, 옷)",
      "에임봇",
      "유도탄",
      "ESP",
    ],
    advantage: "부드러운 UI, 낮은 정지률",
    pricing: [
      { period: "1일", price: "5,000원" },
      { period: "7일", price: "20,000원" },
      { period: "30일", price: "40,000원" },
    ],
    compatibility: "iOS 12.0 이상",
    notes: "부드러운 사용 경험을 원한다면 최고의 선택입니다.",
  },
  "kingmod-android": {
    name: "KingMod",
    platform: "Android",
    logo: "/logos/king_안드.jpg",
    description: "논루팅 Android의 최고 성능 모드",
    features: [
      "스킨핵 (자동차, 총, 옷)",
      "유도탄",
      "ESP",
    ],
    advantage: "논루팅 중 최고의 성능",
    pricing: [
      { period: "1일", price: "5,000원" },
      { period: "7일", price: "20,000원" },
      { period: "30일", price: "40,000원" },
    ],
    compatibility: "Android 8.0 이상",
    notes: "루팅 없이도 최고 수준의 기능을 경험할 수 있습니다.",
  },
  zolo: {
    name: "Zolo",
    platform: "Android",
    logo: "/logos/zolo.jpg",
    description: "부드러운 에임 경험의 Android 모드",
    features: [
      "에임봇",
      "ESP",
    ],
    advantage: "부드러운 화면, 부드러운 에임봇",
    pricing: [
      { period: "1일", price: "5,000원" },
      { period: "7일", price: "17,000원" },
      { period: "30일", price: "35,000원" },
    ],
    compatibility: "Android 8.0 이상",
    notes: "부드러운 에임 경험을 원한다면 최고의 선택입니다.",
  },
  obsidian: {
    name: "Obsidian",
    platform: "Android",
    logo: "/logos/Obsidian.jpg",
    description: "프리미엄 에임 경험의 Android 모드",
    features: [
      "에임봇",
      "ESP",
      "고정기능",
    ],
    advantage: "부드러운 화면, 부드러운 에임봇",
    pricing: [
      { period: "1일", price: "5,000원" },
      { period: "7일", price: "17,000원" },
      { period: "30일", price: "35,000원" },
    ],
    compatibility: "Android 8.0 이상",
    notes: "프리미엄 에임 기능을 원한다면 최고의 선택입니다.",
  },
  "kc-v1": {
    name: "KC V1",
    platform: "Android (Root)",
    logo: "/logos/KC.jpg",
    description: "루팅 기기의 강력한 게임 모드",
    features: [
      "에임봇",
      "ESP",
    ],
    advantage: "모든 기능, 정지률 10% 미만, 녹화방지",
    pricing: [
      { period: "1일", price: "6,000원" },
      { period: "7일", price: "25,000원" },
      { period: "30일", price: "50,000원" },
    ],
    compatibility: "루팅된 Android 기기",
    notes: "루팅 기기에서 최고 수준의 성능을 제공합니다.",
  },
  "kc-v2": {
    name: "KC V2",
    platform: "Android (Root)",
    logo: "/logos/KC.jpg",
    description: "루팅 기기의 최고급 게임 모드",
    features: [
      "에임봇",
      "유도탄",
      "ESP",
    ],
    advantage: "모든 기능, 정지률 10% 미만, 녹화방지",
    pricing: [
      { period: "1일", price: "8,000원" },
      { period: "7일", price: "30,000원" },
      { period: "30일", price: "80,000원" },
    ],
    compatibility: "루팅된 Android 기기",
    notes: "루팅 기기에서 최고 수준의 모든 기능을 제공합니다.",
  },
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = productData[id || ""];

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">제품을 찾을 수 없습니다</h1>
          <Link href="/">
            <button className="glass-btn px-8 py-3 rounded-lg font-semibold">
              메인 페이지로 돌아가기
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b border-border/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover:text-primary transition">
            <ArrowLeft className="h-5 w-5" />
            <span>돌아가기</span>
          </Link>
          <div className="text-2xl font-bold glow-cyan">2X</div>
          <div className="w-24"></div>
        </div>
      </nav>

      {/* Product Header */}
      <section className="py-12 bg-background/50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center rounded-2xl">
              <img
                src={product.logo}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="text-sm font-mono bg-primary/15 text-primary px-3 py-1 rounded border border-primary/30">
                  {product.platform}
                </span>
              </div>
              <h1 className="text-5xl font-bold mb-4 glow-cyan">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-sm font-bold text-primary mb-2">주요 장점</p>
                <p className="text-base text-foreground">{product.advantage}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 glow-magenta">주요 기능</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.features.map((feature, index) => (
              <Card
                key={index}
                className="border-glow-cyan bg-card/40 backdrop-blur-md p-6 border border-border/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 border border-primary/30">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-lg font-semibold">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 glow-magenta">가격 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.pricing.map((plan, index) => (
              <Card
                key={index}
                className="border-glow-cyan bg-card/40 backdrop-blur-md p-8 text-center hover-lift border border-border/30"
              >
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {plan.period}
                </h3>
                <p className="text-4xl font-bold mb-6 glow-cyan">{plan.price}</p>
                <a
                  href="https://t.me/xxh4ck"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="glass-btn w-full px-6 py-3 rounded-lg font-semibold">
                    구매하기
                  </button>
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
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
