function set_text(target, interval: number, str: string) {
  return new Promise((resolve) => {
    setTimeout(() => {
      target.innerHTML = str;
      resolve("");
    }, interval);
  });
}

async function loop(
  target,
  interval: number,
  st_str: string,
  ed_str: string,
  flag: boolean,
  wt_time: number
) {
  if (flag) {
    for (let i = st_str.length; i <= ed_str.length; i++) {
      await set_text(target, interval, ed_str.substring(0, i));
    }
  } else {
    for (let i = ed_str.length; i >= st_str.length; i--) {
      await set_text(target, interval, ed_str.substring(0, i));
    }
  }
  setTimeout(() => {
    loop(target, interval, st_str, ed_str, !flag, wt_time);
  }, wt_time);
}

export async function typewriter(
  node: string,
  st_str: string,
  ed_str: string,
  interval: number,
  wt_time: number
) {
  const target = document.querySelector(node);
  await loop(target, interval, st_str, ed_str, true, wt_time);
}
