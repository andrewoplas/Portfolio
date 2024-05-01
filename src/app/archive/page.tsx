import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { projects } from "./data";

const Archive = () => {
  return (
    <section className="bg-primary">
      <div className="px-default mx-auto min-h-screen max-w-screen-lg pb-32 pt-16 md:pb-40 md:pt-20 lg:pb-52 lg:pt-24">
        <Link
          href="/"
          className="group rounded-button font-body font-semibold text-secondary"
        >
          <div className="flex gap-x-2">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 translate-y-1 transition-transform duration-200 group-hover:-translate-x-1 md:h-6 md:w-6 md:translate-y-0"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.88702 17.637C7.56972 17.9543 7.05528 17.9543 6.73798 17.637L2.67548 13.5745C2.35817 13.2572 2.35817 12.7428 2.67548 12.4255L6.73798 8.36298C7.05528 8.04567 7.56972 8.04567 7.88702 8.36298C8.20433 8.68028 8.20433 9.19472 7.88702 9.51202L5.21155 12.1875L22.75 12.1875C23.1987 12.1875 23.5625 12.5513 23.5625 13C23.5625 13.4487 23.1987 13.8125 22.75 13.8125L5.21155 13.8125L7.88702 16.488C8.20433 16.8053 8.20433 17.3197 7.88702 17.637Z"
                fill="currentColor"
              />
            </svg>
            <span>Andrew Oplas</span>
          </div>
        </Link>

        <h1 className="font-heading text-h4 font-bold text-white">
          all projects
        </h1>

        <Table className="relative mt-8 font-body text-neutral-200/70 md:mt-12">
          <TableHeader className="bg-primary/75 sticky top-0 z-10 backdrop-blur-sm">
            <TableRow>
              <TableHead className="font-semibold text-white">Year</TableHead>
              <TableHead className="font-semibold text-white">
                Project
              </TableHead>
              <TableHead className="hidden font-semibold text-white lg:table-cell">
                Made at
              </TableHead>
              <TableHead className="hidden font-semibold text-white lg:table-cell">
                Built with
              </TableHead>
              <TableHead className="hidden font-semibold text-white sm:table-cell">
                Link
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.map((project) => {
              let linkName = null;
              let icon = null;

              if (project.link.includes("github")) {
                linkName = "GitHub";
                icon = null;
              } else if (project.link.includes("ieeexplore")) {
                linkName = "View Research";
              } else if (project.link.length > 0) {
                linkName = project.link
                  .replace("https://", "")
                  .replace("http://", "")
                  .replace("www.", "");
              }

              return (
                <TableRow key={project.title}>
                  <TableCell className="text-[15px] leading-tight">
                    {project.year}
                  </TableCell>
                  <TableCell className="text-base font-semibold leading-tight text-white">
                    <span className="hidden sm:block">{project.title}</span>

                    <div className="block sm:hidden">
                      {project.link ? (
                        <Link href={project.link} target="_blank">
                          <span>{project.title}</span>
                          <span className="ml-1.5 inline-block">
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5 translate-y-0.5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                            >
                              <path
                                d="M3.75 16.25L16.25 3.75M16.25 3.75L6.875 3.75M16.25 3.75V13.125"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="hidden leading-tight lg:table-cell">
                    {project.madeAt}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    <ul className="flex flex-wrap gap-2">
                      {project.builtWith.map((tech) => (
                        <li key={tech}>
                          <span className="bg-secondary/10 flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 text-secondary">
                            {tech}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </TableCell>
                  <TableCell className="hidden max-w-[300px] text-sm sm:table-cell">
                    {linkName && (
                      <Link
                        className="group flex items-center gap-1 hover:text-secondary"
                        href={project.link}
                        target="_blank"
                      >
                        <span>{linkName}</span>

                        {linkName === "GitHub" ? (
                          <div className="h-3.5 w-3.5">
                            <svg
                              width="98"
                              height="96"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-full w-full"
                              viewBox="0 0 98 96"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                          >
                            <path
                              d="M3.75 16.25L16.25 3.75M16.25 3.75L6.875 3.75M16.25 3.75V13.125"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </Link>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default Archive;
