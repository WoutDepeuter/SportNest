
import { DispatchWithoutAction, ReactNode } from "react";
import {FilterNode} from "@/Components/Table/table_base";


export default class CreateNewFilter<T> extends FilterNode<T> {
    state: {link: string}

    constructor(link: string) {
        super();
        this.state = {link: link};
    }


    public check(value: T): boolean {
        return true;
    }

    // Ugly way of adding a new item button in the filter row. This will be rendered under the header, so it works,
    // but it's a bit of a monkey patch, but oh well…
    public renderWithDispatch(update: DispatchWithoutAction): ReactNode {
        return (
            <div className="flex flex-grow justify-center">
                <a href={this.state.link} className="p-2 bg-pink-400 text-white rounded hover:bg-pink-700">Nieuw</a>
            </div>
        )
    }

}
