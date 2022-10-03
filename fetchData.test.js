import {fetchData} from "./fetchData";

test('fetchData return { success:true }', (done) => {
    fetchData((data) => {
        expect(data).toEqual({
            success: true
        })
        done()
    });
})
