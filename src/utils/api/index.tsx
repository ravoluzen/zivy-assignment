export const fetchTodoAndPost = async () => {
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/todos/1'),
        fetch('https://jsonplaceholder.typicode.com/posts/1')
      ]);
  
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      return { todoData, postData };
    } catch (error) {
      throw new Error('Error fetching data');
    }
  };

  export const fetchComments = async (page: number, limit: number) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/comments');
      const commentsData = await response.json();
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedComments = commentsData.slice(startIndex, endIndex);
      return paginatedComments;
    } catch (error) {
      throw new Error('Error fetching comments');
    }
  };