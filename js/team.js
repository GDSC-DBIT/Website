import data from '../Data/team.json'

export function renderTeamCards() {
  const teamSection = document.querySelector('#cardPos')
  // const cardTemplate = document.querySelector('.teamSectionTemplate')
  // let node = document.importNode(cardTemplate.content, true)

  // // variables from node
  // let clonenode = node.clonenode(true)
  // let name = clonenode.querySelector('#Name')
  // let position = clonenode.querySelector('#Position')
  // let About = clonenode.querySelector('#AboutMe')

  data.forEach(teammate => {
    let socials = ''
    teammate.socials.forEach(social => {
      socials += `<a target="_blank" class="fa fa-fw fa-${social.name} socials href="${social.link}"></a>`
    })

    teamSection.innerHTML += `<div class="col-md-4 col-sm-6 col-xs-12" data-aos="zoom-in" data-aos-duration="500">
        <article class="material-card Blue">
          <h2>
            <span>${teammate.name}</span>
            <strong>
              <i class="fa fa-fw fa-star"></i>
              ${teammate.position}
            </strong>
          </h2>
          <div class="mc-content">
            <div class="img-container">
              <img class="core-img" src="${teammate.image}">
            </div>
            <div class="mc-description">
            ${teammate.about}
            </div>
          </div>
          <a class="mc-btn-action">
            <i class="fa fa-bars"></i>
          </a>
          <div class="mc-footer">
            <h4>
              Socials
            </h4>
            ${socials}
          </div>
        </article>
      </div>`
  })
}