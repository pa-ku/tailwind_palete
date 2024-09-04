import useModal from '../hooks/useModal'

export default function TailwindConfig({ children, name = 'test' }) {
  const [refModal, openModal, closeModal] = useModal()

  return (
    <>
      <button
        onClick={openModal}
        className='border-2 font-bold border-black hover:bg-black hover:text-white text-black px-3 rounded-lg py-1'
      >
        {children}
      </button>

      <dialog className='bg-black w-96 p-5 rounded-lg m-auto' ref={refModal}>
        <h1 className='text-slate-400 text-xl font-bold'>Tailwind Config</h1>
        <p className='text-slate-200'>
          Agrega en tu archivo tailwind.config.js dentro de theme y extend{' '}
        </p>
        <div className='text-slate-200 bg-slate-800 rounded-lg my-2 pl-5 flex flex-col'>
          <span>{`colors: {`}</span>
          <span className='pl-3'>{`${name}: {`}</span>
          <ul className='pl-5'>
            <li>{`100: 'var(--${name}-100)',`}</li>
            <li>{`200: 'var(--${name}-200)',`}</li>
            <li>{`300: 'var(--${name}-300)',`}</li>
            <li>{`400: 'var(--${name}-400)',`}</li>
            <li>{`500: 'var(--${name}-500)',`}</li>
            <li>{`600: 'var(--${name}-600)',`}</li>
            <li>{`700: 'var(--${name}-700)',`}</li>
            <li>{`800: 'var(--${name}-800)',`}</li>
            <li>{`900: 'var(--${name}-900)',`}</li>
            <li>{`},`}</li>
          </ul>
          <p>{`}`}</p>
        </div>

        <button
          className='w-full bg-red-500 rounded-lg mt-2 text-white py-2'
          onClick={closeModal}
        >
          Close
        </button>
      </dialog>
    </>
  )
}
