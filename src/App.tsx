import { BrowserRouter, Route, NavLink, Routes } from 'react-router-dom'
import cx from 'classnames'

import { Basic } from './examples/Basic'
import { Persist } from './examples/Persist'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative h-full w-full min-h-screen bg-stone-100 p-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-4">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <a
              href="https://github.com/gerhardsletten/react-reader"
              className="w-full md:w-[250px]"
            >
              <img
                src="https://react-reader.metabits.no/files/react-reader.svg"
                alt="React-reader - powered by epubjs"
                width="330"
                height="104"
                className="w-60 h-auto block mx-auto"
              />
            </a>
            <nav className="w-full md:w-auto flex items-center justify-center gap-2 flex-wrap">
              {[
                ['Basic', '/'],
                ['Persist', '/persist'],
              ].map(([label, link], key) => (
                <NavLink
                  to={link}
                  key={key}
                  className={({ isActive }) =>
                    cx('hover:underline', { underline: isActive })
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/persist" element={<Persist />} />
              <Route path="*" element={<Basic />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
