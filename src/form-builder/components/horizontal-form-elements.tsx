import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { formElementsList } from '@/form-builder/constant/form-elements-list';
import {
  AppendElementHorizontal,
  FormElement,
} from '@/form-builder/form-types';
import { FaPlus } from 'react-icons/fa';

//======================================
export function HorizontalFormElements({
  index,
  appendElementHorizontal,
}: {
  index: number;
  appendElementHorizontal: AppendElementHorizontal;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-xl h-9">
          <FaPlus />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        data-align="end" // not working
        className="space-y-3 max-h-64 overflow-y-scroll"
      >
        {formElementsList.map((o) => (
          <DropdownMenuItem
            onSelect={() => {
              appendElementHorizontal(
                o.fieldType as FormElement['fieldType'],
                index,
              );
            }}
            key={o.name}
            disabled={!!o.static}
            className="px-4"
          >
            {o.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
