import { expectType, TypeEqual } from 'ts-expect'
import { MyPartial } from '../src/partial'

describe('My Partial', () => {
  it('should be success', () => { 
    type User = {
      firstName: string;
      lastName: string;
      age: number;
    }

    expectType<TypeEqual<MyPartial<User>, Partial<User>>>(true)
   })
 })