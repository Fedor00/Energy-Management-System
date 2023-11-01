import Pagination from "react-bootstrap/Pagination";

function CustomPagination({ totalPages, currentPage, setCurrentPage }) {
   const prevPage = () => {
      if (currentPage > 1) setCurrentPage((c) => c - 1);
   };
   const nextPage = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
   };

   return (
      <Pagination>
         <Pagination.Prev onClick={prevPage}></Pagination.Prev>
         {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
               key={index}
               active={index + 1 === currentPage}
               onClick={() => setCurrentPage(index + 1)}
            >
               {index + 1}
            </Pagination.Item>
         ))}
         <Pagination.Next onClick={nextPage}></Pagination.Next>
      </Pagination>
   );
}

export default CustomPagination;
