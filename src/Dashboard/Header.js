import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <div class="ten">
  <h1>RECRUITS HERE</h1>
</div>
            
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
            </div>
        </header>
    )
}

export default Header
