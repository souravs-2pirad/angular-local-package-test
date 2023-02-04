/**
 * 
 * @param source The source object to copy properties from
 * @param target The target object which will get filled from source
 */
export function copyProperties(source:any, target:any)
{
	if(source)
	{
		for(let prop in target)
		{
			if(source[prop] !== undefined)
			{
				target[prop] = source[prop];
			}
		}
	}
}

/**
 * 
 * @param obj the object from which the properties will be omitted. obj will be mutated
 * @param properties the properties to omit
 */
export function omitProperties(obj: any, properties: any[])
{
	for(let property of properties)
	{
		delete obj[property];
	}
}

export const ExtendClassAndOmit = <T, K extends keyof T>(Class: new () => T, keys: K[]): new () => Omit<T, typeof keys[number]> =>
  Class;