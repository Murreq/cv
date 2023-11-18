import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-100 font-sans">

    <div className="container mx-auto py-8 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold">Gareth Whitton</h1>
            <p className="text-gray-600">Junior Web Developer</p>

            <hr className="my-4"></hr>

            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="text-gray-700">Ambitious and motivated front-end web developer passionate about creating engaging and intuitive user experiences. Eager to apply theoretical knowledge and self-taught skills in a professional setting, dedicated to learning and contributing to innovative projects.</p>

            <h2 className="text-xl font-semibold mt-4 mb-2">Tech Stack/Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>TailwindCSS</li>
                <li>Next.js 14</li>
                <li>Framer Motion</li>
                <li>Git</li>
                <li>Mdx</li>
                <li>Responsive Web Design</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4 mb-2">Contact/Socials</h2>
            <ul className="list-disc list-inside text-gray-700">
                <li>Email: murreq@gmail.com</li>
                <li>Git: <a href="https://github.com/Murreq"
                        className="text-blue-500 hover:underline">Murreq</a></li>
                <li>Instagram: <a href="https://www.instagram.com/selvik___/" className="text-blue-500 hover:underline">selvik___</a>
                </li>
            </ul>
        </div>
    </div>

</div>
  )
}
