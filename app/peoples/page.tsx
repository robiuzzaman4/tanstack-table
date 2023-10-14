import { peoples } from "@/app/peoples/data/peoples";
import { columns } from "./components/columns";
import PeopleDataTable from "./components/data-table";


const PeoplesPage = () => {
    return (
        <section className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-28 pb-20">
            <PeopleDataTable columns={columns} data={peoples} />
        </section>
    );
};

export default PeoplesPage;