import { useEffect, useState } from 'react';
import { Project } from './types/project';


function ProjectList({selectedCategories}: {selectedCategories: string[]}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [pageNum, setPageNum] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchProjects = async () => {

      const categoryParams = selectedCategories
        .map((cat) => `projectTypes=${encodeURIComponent(cat)}`)
        .join('&')

      const response = await fetch(
        `https://localhost:5000/api/Water/AllProjects?pageSize=${pageSize}&pageNum=${pageNum}${selectedCategories.length ? `&${categoryParams}`: ''}`, 
        {
          credentials: 'include',
        }
      );
      const data = await response.json();
      setProjects(data.projects);
      setTotalItems(data.totalNumProjects);
    };

    fetchProjects();
  }, [pageSize, pageNum, totalItems, selectedCategories]);

  // Calculate total pages AFTER totalItems updates
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <>
      <br />
      {projects.map((p) => (
        <div id="projectCard" className="card" key={p.projectId}>
          <h3 className="card-title">{p.projectName}</h3>
          <div className="card-body">
            <ul className="list-unstyled">
              <li>
                {' '}
                <strong>Project Type:</strong> {p.projectType}
              </li>
              <li>
                {' '}
                <strong>Project Program:</strong> {p.projectRegionalProgram}
              </li>
              <li>
                {' '}
                <strong>Project Impact:</strong> {p.projectImpact}
              </li>
              <li>
                {' '}
                <strong>Project Phase:</strong> {p.projectPhase}
              </li>
              <li>
                {' '}
                <strong>Project Status:</strong> {p.projectFunctionalityStatus}
              </li>
            </ul>
          </div>
        </div>
      ))}

      {/* Pagination Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <button
          disabled={pageNum === 1}
          onClick={() => setPageNum(pageNum - 1)}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setPageNum(index + 1)} disabled={pageNum === (index + 1)}
            style={{
              backgroundColor: pageNum === index + 1 ? '#007bff' : 'white',
              color: pageNum === index + 1 ? 'white' : 'black',
              border: '1px solid #ccc',
              padding: '5px 10px',
              cursor: 'pointer',
            }}
          >
            {index + 1}
          </button>
        ))}

        <button
          disabled={pageNum === totalPages}
          onClick={() => setPageNum(pageNum + 1)}
        >
          Next
        </button>
      </div>

      <br />
      <label>
        Results per page:
        <select
          value={pageSize}
          onChange={(p) => {
            setPageSize(Number(p.target.value))
            setPageNum(1);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
    </>
  );
}

export default ProjectList;
