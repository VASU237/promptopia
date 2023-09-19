import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata={
    title:'Propmptopia',
    description:'Discoverans share AI prompts'
}

const rootRayout = ({children}) => {
  return (
    <html lang="en">
    <body>
    <Provider>
        <div className="main">
            <div className="gradientt"  />
        </div>
        <main className='app' >
            <Nav />
            {children}
        </main>
        </Provider>
    </body>
    </html>
  )
}

export default rootRayout;
