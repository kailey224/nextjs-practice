import Nav from './Nav'

export default function Lyout({children}: any) {
    return (
      <>
        <div>
            <Nav />
            {children}
        </div>
      </>
    )
  }