import { useState } from 'react'
import './App.css'
import { JsonAutoCompleteInput } from 'json-autocomplete-input'

const demoSchema = {
  user: {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    profile: {
      age: 30,
      gender: 'male',
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        country: 'USA',
      },
      preferences: {
        theme: 'dark',
        notifications: {
          email: true,
          sms: false,
          push: true,
        },
      },
    },
  },
  posts: [
    {
      id: 101,
      title: 'My First Post',
      content: 'This is the content of my first post.',
      tags: ['introduction', 'personal'],
      published: true,
      createdAt: '2023-01-01T12:00:00Z',
    },
    {
      id: 102,
      title: 'Another Post',
      content: 'This is another post.',
      tags: ['coding', 'tutorial'],
      published: false,
      createdAt: '2023-02-15T08:30:00Z',
    },
  ],
  settings: {
    language: 'en',
    timezone: 'America/New_York',
    privacy: {
      profileVisibility: 'public',
      searchEngineIndexing: false,
    },
  },
}

function App() {
  const [value, setValue] = useState('')
  const [theme] = useState<'light' | 'dark'>('light')

  return (
    <div className={`${theme === 'dark' ? 'dark ' : ''}min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500`}>
      <header className="w-full max-w-2xl mx-auto text-center py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2">json-autocomplete-input</h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">A smart JSON input with autocomplete, powered by <a href="https://www.npmjs.com/package/json-autocomplete-input" className="underline text-blue-500" target="_blank" rel="noopener noreferrer">json-autocomplete-input</a></p>
        {/* <button
          className="px-4 py-2 rounded bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button> */}
      </header>
      <main className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Live Demo</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">Try typing <code>user.</code> here. Autocomplete will suggest keys and paths based on the schema and suggestions provided.</p>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-800">
            <JsonAutoCompleteInput
              value={value}
              onChange={setValue}
              placeholder="Type your JSON path here..."
              jsonData={demoSchema}
            />
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">Current Value</h3>
          <pre className="bg-gray-100 dark:bg-gray-900 rounded p-4 text-sm overflow-x-auto text-left text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 min-h-24">
             {value}
           </pre>
        </div>
        <div className="mt-8 text-center">
          <a href="https://github.com/Priyanshu85/json-auto-complete-example" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold shadow hover:scale-105 transition-transform">View Source on GitHub</a>
        </div>
      </main>
      <footer className="mt-8 text-gray-500 text-sm">Made with <span className="text-pink-500">♥</span> by Priyanshu</footer>
    </div>
  )
}

export default App
