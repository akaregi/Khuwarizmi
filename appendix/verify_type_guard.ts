//
// `varaible is T` による形式的な型と実際の型の挙動を検証する
//

// 検証用関数
function ensureNumber(obj: unknown): obj is number {
  return obj === obj
}

// `T` は `string` 型であるものの、`unknown` として宣言する
const T: unknown = 'aaa'

// `T` が `number` 型として扱われるかテストする
ensureNumber(T)

// `typeof` で示される型を確認する
console.log(typeof T) // -> `string`
