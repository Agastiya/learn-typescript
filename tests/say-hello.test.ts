import { sayHello } from "../src/say-hello"

describe('sayHello',function(){
    it('should return Hello Putra',function(){
        expect(sayHello('Putra')).toBe('Hello Putra')
    })
})