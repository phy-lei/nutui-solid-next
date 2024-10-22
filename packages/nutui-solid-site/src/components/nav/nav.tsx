import { For, Show, createSignal, onCleanup, onMount } from 'solid-js'
import { nav } from '~/config.json'
import './nav.scss'
import useLocale from '@/assets/locale/uselocale'

function letterToLower(str: string) {
  return str.toLocaleLowerCase()
}

function Nav() {
  const [cNav] = createSignal<any>(nav)
  const [lang] = useLocale()
  const [fixed, setFixed] = createSignal(false)

  const scrollNav = () => {
    const top = document.documentElement.scrollTop
    if (top > 64) {
      setFixed(true)
    }
    else {
      setFixed(false)
    }
  }

  onMount(() => {
    document.addEventListener('scroll', scrollNav)
    onCleanup(() => {
      document.removeEventListener('scroll', scrollNav)
    })
  })

  return (
    <div class={`doc-nav ${fixed() ? 'fixed' : ''}`}>
      <ol>
        <For each={cNav()}>
          {cn => (
            <>
              <Show when={cn.enName !== 'dentry1'}>
                <li>{lang() === 'zh-CN' ? cn.name : cn.enName}</li>
              </Show>

              <ul>
                <For each={cn.packages}>
                  {
                    (cp) => {
                      if (!cp.show)
                        return null
                      return (
                        <a
                          // class={({ isActive, isPending }) =>
                          //   isPending ? '' : isActive ? 'selected' : ''
                          // }
                          href={letterToLower(`${lang() ? `/h5/${lang()}` : '/h5'}/${cp.name}`)}
                        >
                          <li>
                            {cp.name}
&nbsp;&nbsp;
                            <b>{lang() === 'zh-CN' && cp.cName}</b>
                            {cp.version !== '2.0.0'
                              ? (
                                  <b
                                    style={{
                                      'background': 'rgb(250, 205, 205)',
                                      'padding': '0px 5px',
                                      'border-radius': '5px',
                                      'color': 'rgb(255, 255, 255)',
                                      'transform': 'scale(0.8)',
                                      'height': '20px',
                                      'line-height': '20px',
                                      'display': 'inline-block',
                                    }}
                                  >
                                    🛠
                                  </b>
                                )
                              : null}
                          </li>
                        </a>
                      )
                    }
                  }
                </For>
              </ul>
            </>
          )}
        </For>

      </ol>
    </div>
  )
}

export default Nav
