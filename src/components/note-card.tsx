export function NoteCard() {
    return (
        <button className='rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400'>
            <span className='text-sm font-medium text-slate-200'>
                Há 2 dias
            </span>
            <p className='text-sm leading-6 text-slate-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sint expedita eius harum deleniti minima omnis culpa vitae, officiis est rem, reiciendis tenetur hic quasi voluptate suscipit labore. Nostrum, veritatis?
            </p>

            <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-black/0 pointer-events-none' />
        </button>
    )
}