/**
 * 任務：實作一個 async 函式 `fetchData`，該函式應該能夠從指定的 URL 取得資料。
 * 範例：fetchData('https://jsonplaceholder.typicode.com/todos/1') 應該回傳一個包含 id、title 等屬性的物件
 * @param url - 要取得資料的 URL
 * @returns - 回傳一個 Promise，該 Promise resolve 的值應該是從 URL 取得的資料
 */

// 請在下方寫下你的程式碼
interface FetchData {
  userId:number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchData = async (url: string): Promise<FetchData> => {
  // try {
  //   const response = await fetch(url);
  //   if(!response.ok) {
  //     throw new Error(`網址錯誤! 狀態: ${response.status}`)
  //   }
  //   const data: FetchData = await response.json();
  //   return data;
  // } catch (error) {
  //   console.error("取得數據出現錯誤: ", error);
  //   throw error;
  // }     // 效能不好

  return await fetch(url)
    .then(response => response.json())
    .catch(error => console.log(error))
};

