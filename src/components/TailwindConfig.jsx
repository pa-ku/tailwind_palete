import useModal from '../hooks/useModal'

export default function TailwindConfig({ children, name = 'test' }) {
  const [refModal, openModal, closeModal] = useModal()

  return (
    <>
      <button
        onClick={openModal}
        className='flex font-bold py-1 text-gray-400 rounded-lg text-center  stroke-gray-500  hover:text-white '
      >
        {children}
      </button>

      <dialog
        className='bg-black md:w-[35em] p-6 rounded-lg m-auto'
        ref={refModal}
      >
        <h1 className='text-white text-2xl font-bold'>How to add Tailwind colors</h1>
        <p className='text-gray-400'>
          To use CSS variables in Tailwind, add the following code to your <b>tailwind.config.js</b> file inside
        </p>
        <div className='text-gray-200  bg-gray-800 rounded-lg my-2 p-3 flex flex-col'>
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
            <li>{`1000: 'var(--${name}-1000)',`}</li>
            <li>{`},`}</li>
          </ul>
          <p>{`}`}</p>
        </div>

        <button
          className='w-full bg-white  rounded-lg mt-2 text-black font-bold py-2'
          onClick={closeModal}
        >
          Close
        </button>
      </dialog>
    </>
  )
}
