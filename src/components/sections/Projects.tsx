import { Heading } from "@/components/ui/typography";
import { ProjectCard } from "@/components/project";
import { projects } from "@/data";

export default function Projects() {
  return (
    <section className="max-w-[1392px] mx-auto px-4">
      <div className="bg-ifw-gray rounded-[24px] md:rounded-[64px] p-8 px-4 md:px-24 md:py-30">
        <Heading
          level="h1"
          align="center"
          className="text-ifw-dark mb-10 md:mb-15"
        >
          Проєкти <span className="accent">IFW</span>
        </Heading>
        <p className="text-ifw-dark max-w-[733px] mx-auto text-center text-[16px] leading-[22px] md:text-[22px] md:leading-[30px] mb-10 md:mb-15">
          Інвестуй від <span className="accent-dark">2000 грн</span> у важливі
          проєкти та вже зараз отримуй{" "}
          <span className="accent-dark">пасивний дохід</span> з їхніх прибутків
        </p>

        <p className="text-ifw-dark font-sans-wide font-bold text-[20px] leading-[26px] md:text-[32px] md:leading-[38px] mb-10 md:mb-29">
          Актуальні проєкти, які знаходяться в процесі збору бюджету для{" "}
          <span className="accent">старту реалізації</span>:
        </p>

        <div className="space-y-8 mb-30">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="space-y-6">
          <p className="text-ifw-dark font-sans text-[20px] leading-7">
            <span className="accent-dark">90% доходів</span> від чистого
            прибутку належать інвесторам{" "}
            <span className="accent-dark">(тобто Вам)</span>. Чим більше ви
            інвестуєте в проект, тим{" "}
            <span className="accent-dark">більший дохід</span> отримуєте з його
            чистого прибутку. Усе логічно та справедливо.
          </p>
          <p className="text-ifw-dark font-sans text-[20px] leading-7">
            <span className="accent-dark">10%</span> доходів від{" "}
            <span className="accent-dark">чистого прибутку</span> проєктів
            належать керуючій компанії проєкту —{" "}
            <span className="accent-dark">IFW</span>, оскільки компанія також
            здійснює <span className="accent-dark">власні інвестиції</span> в
            кожен проект, виступає його{" "}
            <span className="accent-dark">організатором і реалізатором</span>, а
            також забезпечує управління, утримує професійну команду, здійснює
            контроль та{" "}
            <span className="accent-dark">розвиток кожного проєкту</span>.
          </p>
          <p className="text-ifw-dark font-sans text-[20px] leading-7">
            Після <span className="accent-dark">завершення збору</span>{" "}
            інвестицій буде проведено{" "}
            <span className="accent-dark">повний перерахунок</span> кількості
            інвесторів і сум їхніх інвестицій{" "}
            <span className="accent-dark">по всім проєктам</span> для точного
            розрахунку часток кожного із співвласників{" "}
            <span className="accent-dark">діючого бізнесу</span>.
          </p>
        </div>
      </div>
    </section>
  );
}