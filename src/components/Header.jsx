import logo from '/vite.svg'

export default function Header() {
    const nowTime = new Date()
    
    return (
      <div>
         <header>
            <img src="{logo}" alt="" />
            <h3>Title text</h3>
            <span>Now time: {nowTime.toLocaleTimeString()}</span>
          </header>
      </div>
    )
  }

