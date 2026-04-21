import React from 'react'; 
import { useState } from 'react' function App() {
{
const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`); const itemsPerPage = 5;
const [currentPage, setCurrentPage] = useState(1); const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = data.slice(indexOfFirstItem, indexOfLastItem); const totalPages = Math.ceil(data.length / itemsPerPage);
return (
<div>
<h2>Pagination Example</h2>
<ul>
{currentItems.map((item, index) => (
<li key={index}>{item}</li>
))}
</ul>
<div style={{ marginTop: "10px" }}>
<button
onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}
>
Prev
</button>
<span style={{ margin: "0 10px" }}> Page {currentPage} of {totalPages}
</span>
<button
onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages}
>
Next
</button>
</div>
</div>
);
};
}
export default App
