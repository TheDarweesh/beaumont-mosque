import React from 'react'

function IqamaTimes() {
    return (
        <>
            <div className='iqamaBox'>
                <h1>Iqama Times</h1>
                <div className='iqama-table'>
                    <div className='salah'>
                        <div className='table-header'>Salah</div>
                        <div className='salah-name'>Fajr</div>
                        <div className='salah-name'>Shuruq</div>
                        <div className='salah-name'>Dhuhr</div>
                        <div className='salah-name'>Asr</div>
                        <div className='salah-name'>Maghreb</div>
                        <div className='salah-name'>Isha</div>
                    </div>
                    <div className='athan'>
                        <div className='table-header'>Athan</div>
                        <div className='athan-time'>5:00</div>
                        <div className='athan-time'>7:00</div>
                        <div className='athan-time'>12:00</div>
                        <div className='athan-time'>4:00</div>
                        <div className='athan-time'>6:00</div>
                        <div className='athan-time'>8:00</div>
                    </div>
                    <div className='iqama'>
                        <div className='table-header'>Iqama</div>
                        <div className='iqama-time'>5:10</div>
                        <div className='iqama-time'>7:10</div>
                        <div className='iqama-time'>12:10</div>
                        <div className='iqama-time'>4:10</div>
                        <div className='iqama-time'>6:10</div>
                        <div className='iqama-time'>8:10</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IqamaTimes