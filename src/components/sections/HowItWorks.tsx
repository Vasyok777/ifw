import { Heading, Text } from "@/components/ui/typography";

export default function HowItWorks() {
  return (
    <section className="pt-20 pb-12 md:pt-30 md:pb-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <Heading
          level="h2"
          align="center"
          className="mb-8 md:mb-20 text-[#d6d7d6]"
        >
          Як це <span className="text-ifw-purple uppercase">ПРАЦЮЄ?</span>
        </Heading>

        <div className="space-y-4 md:space-y-6">
          <Text>
            <span className="accent">Додатково</span> — діє унікальна реферальна
            система, що дозволяє{" "}
            <span className="accent">збільшувати прибуток</span>, або
            підвищувати власну інвестицію в наявних проектах відповідно до
            вашого статусу інвестора <span className="accent">IFW</span>.
          </Text>
          <Text>
            Персоналізований <span className="accent">цифровий</span> та{" "}
            <span className="accent">фізичний сертифікат інвестора</span>
            <br />
            Iменний документ, що підтверджує ваш статус та участь у проектах{" "}
            <span className="accent">IFW</span> як співвласника{" "}
            <span className="accent">обраного проекту</span> та ваш % у ньому.
          </Text>
          <Text>
            Обирайте свій <span className="accent">інвест статус</span> та
            ставайте партнером <span className="accent">IFW</span> з обраних
            потенційних проектів.
          </Text>
        </div>
      </div>
    </section>
  );
}