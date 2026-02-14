import { Card } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function Notice() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 bg-background/50 border-b border-primary/20">
        <div className="container">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>돌아가기</span>
          </button>
          <h1 className="text-5xl md:text-6xl font-bold glow-cyan">
            구매 전 필수 확인
          </h1>
        </div>
      </section>

      {/* Notice Content */}
      <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container max-w-4xl">
          <Card className="border-glow-cyan bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-8 md:p-16 border-2 border-primary/50 shadow-2xl">
            <div className="space-y-8">
              <div className="inline-block mb-4 px-4 py-2 bg-primary/20 border border-primary/40 rounded-full">
                <span className="text-sm font-bold text-primary uppercase tracking-widest">⚠️ 중요 공지</span>
              </div>

              <p className="text-xl text-primary font-semibold">
                2X Store에서 제공하는 모든 서비스를 이용하기 전에 반드시 확인해주세요
              </p>

              {/* Item A */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60">
                      <span className="text-2xl font-bold text-primary">A</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                      핵을 구매한 이후 게임이 업데이트될 경우, 핵은 정상적으로 작동하지 않을 수 있습니다. 이 경우 패치 파일을 제공받아 사용자가 직접 업데이트해야 합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item B */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60">
                      <span className="text-2xl font-bold text-primary">B</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                      2X 측에서 원격으로 패치 파일 업데이트를 진행할 경우, 추가 비용이 발생할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item C */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60">
                      <span className="text-2xl font-bold text-primary">C</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                      패치 파일을 정상적으로 적용한 상태에서도 핵이 작동하지 않는 경우, 해당 핵은 서비스가 종료된 것으로 간주됩니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item D */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60">
                      <span className="text-2xl font-bold text-primary">D</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                      구매자는 게임 업데이트로 인해 핵 사용이 불가능해질 수 있음에 동의하며, 이에 따른 핵 판매 중단 결정에 대해 어떠한 항의도 하지 않음에 동의합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item E */}
              <div className="border-l-4 border-primary pl-6 py-4">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-primary/60">
                      <span className="text-2xl font-bold text-primary">E</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                      구매자의 기기에서 정상적으로 실행 또는 설치가 가능한 상태이거나, 2X 서비스를 실제로 사용하지 않은 경우라도 환불은 불가능합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-8 mt-8 border-t-2 border-primary/30 text-center">
                <p className="text-lg md:text-xl text-primary font-bold">
                  ⚠️ 2X에 핵을 구매하면 위 조항에 모두 동의하는 것으로 간주합니다.
                </p>
              </div>

              {/* 2X Logo */}
              <div className="text-center mt-12">
                <p className="text-3xl md:text-4xl font-bold glow-cyan">2X</p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
