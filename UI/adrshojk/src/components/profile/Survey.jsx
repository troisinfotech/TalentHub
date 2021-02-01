import React from 'react'

const Survey = () => {
    return (
        <div>
            <h2>
                Places You love And Why
            </h2>
            <form>
                <FormControl>
                    <InputLabel htmlFor="place">Place</InputLabel>
                    <Input id="place" />
                </FormControl>
            </form>
        </div>
    )
}

export default Survey
