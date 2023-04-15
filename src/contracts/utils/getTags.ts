type Tag = {
  name: string,
  value: string,
  action?: string,
}

/**
 * getTags 
 *
 * @param {string} action
 * @return {any}
 */
export default function getTags(action?: string): Array<Tag>{
  const tags = [
      { name: 'Application', value: 'Context' },
      { name: 'App-Version', value: "1.9.0" },
    ];
    if (action) tags.push({ name: 'Action', value: action });
    return tags;
    

}

