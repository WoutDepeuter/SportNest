import { DispatchWithoutAction } from "react";
import {FilterNode} from "@/Components/Table/table_base";


export default class StringFilter<T> extends FilterNode<T> {
    state: { value: string };
    checkFunc: (user: T, s: string) => boolean;

    public constructor(check: (t: T, s: string) => boolean) {
        super();
        this.state = {value: ""};
        this.checkFunc = check;
    }

    public check(value: T): boolean {
        return this.checkFunc(value, this.state.value);
    }

    public renderWithDispatch(update: DispatchWithoutAction) {
        return (
            <div className="flex flex-grow justify-center space-x-2 p-2">
                <input
                    className="p-2 rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {
                        this.state = {value: e.target.value.toLowerCase()};
                        update();
                    }}
                />
            </div>
        );
    }

}
