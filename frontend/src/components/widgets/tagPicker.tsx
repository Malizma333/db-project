import { SlTag, SlIconButton, SlDropdown, SlMenu, SlMenuItem, SlInput } from '@shoelace-style/shoelace/dist/react';

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '2em',
    justifyContent: 'start',
  },
  menu: {
    height: '8em',
  }
}

export default function TagPicker(
  { variant, selected, available=[], setSelected=undefined, viewMode=false, tagType=undefined } :
  {
    variant: "success" | "warning" | "danger" | "primary",
    selected: string[],
    available?: string[],
    setSelected?: (s: string[]) => void,
    viewMode?: boolean,
    tagType?: string
  }
) {
  function onRemoveTag(i: number) {
    if (setSelected !== undefined) {
      setSelected(selected.slice(0, i).concat(selected.slice(i + 1)))
    }
  }

  function onAddTag(name: string) {
    if (setSelected !== undefined) {
      setSelected(selected.concat([name]))
    }
  }

  // TODO refactor to wrap tags and add a new textbox somewhere

  return (
    <div style={styles.root}>
      {selected.map((tag, index) => (
        <SlTag key={index} variant={variant} removable={!viewMode} size="small" onSlRemove={() => onRemoveTag(index)}>
          {tag}
        </SlTag>
      ))}
      {!viewMode && available.length > selected.length &&
        <SlDropdown>
          <SlIconButton slot="trigger" name="plus"></SlIconButton>
          <SlMenu style={styles.menu} onSlSelect={(e) => onAddTag(e.detail.item.value)}>
            {available.filter((tag) => !selected.includes(tag)).map((tag) => {
              return (
                <SlMenuItem value={tag}>
                  {tag}
                </SlMenuItem>
              )
            })}
          </SlMenu>
        </SlDropdown>
      }
      {!viewMode &&
        <SlInput placeholder={"New " + tagType}>
        </SlInput>
      }
    </div>
  )
}