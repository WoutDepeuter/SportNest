import { DispatchWithoutAction, ReactNode } from "react";
import {FilterNode} from "@/Components/Table/table_base";

export class ListFilter<T> extends FilterNode<T> {
    private values: T[];
    private mapper: (t: T) => string;
    private invMapper: (s: string) => T;
    state: { selectedValue: T | null } = { selectedValue: null };

    public constructor(values: T[], mapper: (t: T) => string, invMapper: (s: string) => T) {
        super();
        this.values = values;
        this.mapper = mapper;
        this.invMapper = invMapper;
    }

    public check(value: T): boolean {
        return this.state.selectedValue == null || this.state.selectedValue == value;
    }
    public renderWithDispatch(update: DispatchWithoutAction): ReactNode {
        const selectStyle = "p-2 rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none";
        const selectedValue = this.state.selectedValue ? this.mapper(this.state.selectedValue) : "";
        return (
            <div className="flex flex-grow justify-center space-x-2 p-2">
                <select className={selectStyle}
                        value={selectedValue}
                        onChange={(e) => {
                            const newValue = e.target.value == "" ? null : this.invMapper(e.target.value);
                            this.state = {
                                selectedValue: newValue
                            };
                            update();
                        }}>
                    <option value="">All</option>
                    {this.values
                        .map(this.mapper)
                        .filter(s => s != "")
                        .map((s) => {
                            return <option key={s} value={s}>{s}</option>
                        })}
                </select>
            </div>
        );
    }
}

export class StringListFilter extends ListFilter<string> {
    public constructor(values: string[]) {
        super(values, (s) => s, (s) => s);
    }
}
