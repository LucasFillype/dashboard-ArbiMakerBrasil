import { Textarea } from "@/components/ui/textarea";


export default function NotesPage (){
    return(
    <main>
        <header>
            <h1 className="text-bold text-white flex justify-center mb-[30px]"> Digite Suas Anotações na Área abaixo!</h1>
        </header>
        <section className="flex justify-center">
            <Textarea className=" w-[300px] bg-zinc-800 border-zinc-700 text-white"/>
        </section>

    </main>
    )
}