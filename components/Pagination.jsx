import Link from "next/link";

const Pagination = ({ page, total, PER_PAGE }) => {
  const lastPage = Math.ceil(total / PER_PAGE);

  return (
    <>
      {page > 1 && (
        <Link href={`/sites?page=${page - 1}`}>
          <a className="btn-secondary">prev</a>
        </Link>
      )}
      {page < lastPage && (
        <Link href={`/sites?page=${page + 1}`}>
          <a className="btn-secondary">next</a>
        </Link>
      )}
    </>
  );
};

export default Pagination;
