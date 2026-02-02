"use client"
import Stair from "@/components/animate/Stair"
import SectionLead from "@/components/SectionLead"

const LeadStair = () => {
  return (
<section className="flex items-center justify-center w-full ">
    <SectionLead head="Что такое трансформационные игры
" text="Это психологический инструмент, который помогает увидеть скрытые причины повторяющихся проблем и изменить внутренние установки через игровой формат."/>
    <Stair />
</section>
  )
}

export default LeadStair
